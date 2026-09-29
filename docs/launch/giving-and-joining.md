# General giving and Foundation registration

## General giving

`/donate` offers an unrestricted Paystack checkout before the initiative list. Initiative detail pages retain their dedicated checkout and link back to general giving. General giving remains available if the initiative collection cannot load.

General donations omit `cause_id` from both Paystack metadata and `POST /api/donations/verify/`. This matches the adjacent JCF backend's `DonationVerifyAPIView`, Paystack webhook, and nullable `Donation.cause` model. Initiative gifts retain their cause ID in both places. `NEXT_PUBLIC_GENERAL_DONATION_CAUSE_ID` is no longer required or used.

Payments continue to use the existing `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`, Ghana cedis, preset/custom amounts, and server verification. Pending verification keeps the payment reference and does not invite another payment. Confirm live settlement and receipt delivery in a controlled provider/backend test before release; local checks do not charge a card or send a real donation.

## Joining

The entry points are the desktop and mobile header, mobile menu, homepage hero and community invitation, community page, and footer. `/join` collects:

- `name`: required, trimmed text (up to 150 characters)
- `email`: required email (up to 254 characters)
- `phone`: optional text, including country code (up to 40 characters)
- `country`: required country name (up to 100 characters)
- `region`: optional region/state (up to 100 characters)

The form uses native autocomplete and validation, disables fields during submission, prevents duplicate in-flight submissions, preserves entered details on errors, and focuses feedback. It does not persist personal details to browser storage.

The Join form posts to `POST /api/join-foundation/` on the JCF backend, using the existing `NEXT_PUBLIC_API_URL` base. `NEXT_PUBLIC_JOIN_FOUNDATION_PATH` is no longer needed. The endpoint validates and stores a Foundation registration, then responds with HTTP 201 and `{ "status": "registered" }`. The frontend requires that acknowledgement before displaying success; an error, timeout or unexpected response keeps the form details available for retry.

Email addresses are normalized to lowercase for deduplication. A repeat submission returns the same acknowledgement without creating another record or overwriting existing personal details. Optional phone numbers must include a valid international country code if provided. Registration does not create a portal account, enrol a centre member, send email, or subscribe the person to the newsletter.

Staff can find submissions under **Inbox → Foundation registrations**, search by name/email/location, filter by country or New/Reviewed, and mark a registration reviewed. This internal review never delays Telegram access. The existing `/api/join-centre/` workflow remains separate.

After an accepted submission, the form clears the details and shows the Telegram invitation from `siteConfig.social.telegramGroup`. The invitation opens in a new tab so the confirmation remains available. There is no automatic redirect, approval wait, or extra email step. Existing public social links on `/community` remain available.

## Deployment

1. Deploy JCF and run `python manage.py migrate --database=default` to apply `website.0002_foundationregistration` (and any pending account migration). Do not migrate Inner Space.
2. Ensure `CORS_ALLOWED_ORIGINS` includes the public website origin. Defaults include `https://www.jancosmicfoundation.org` and `https://jancosmicfoundation.org`; an environment override replaces those defaults.
3. Build/deploy the public site with `NEXT_PUBLIC_API_URL=https://admin.jancosmicfoundation.org/api`, or the intended API host. The API base is compiled into the client bundle; changing it requires a rebuild. Remove obsolete `NEXT_PUBLIC_JOIN_FOUNDATION_PATH` configuration.
4. Verify a controlled registration after release. Local checks used only synthetic records in an isolated SQLite database and did not submit production registrations or join Telegram.

The API has a configurable application throttle (`FOUNDATION_REGISTRATION_RATE`, default `20/hour` per identified client IP). Configure trusted proxy handling and a shared cache/edge limits for a multi-worker production deployment; the default local-memory cache is not a global abuse-prevention boundary.

## Verification

The current integration passed all 34 backend tests and 22 frontend tests, TypeScript, ESLint, and the public production build against the isolated local API.

- Frontend regression coverage includes the registration payload and fixed endpoint, explicit save acknowledgement, unexpected responses, validation errors, and network failures, alongside existing donation tests.
- Backend coverage includes required/optional fields, length and international-phone validation, retry deduplication, non-disclosure, preserved centre requests, role-protected review, CSRF, throttling, and CORS.
- A real browser submission to the isolated local API was verified: invalid phone feedback preserved the fields; retry saved the record; the Telegram invitation appeared with focus; the matching name, email, country and region appeared in the admin inbox.

Run `npm test`, `npx tsc --noEmit`, `npm run lint` and `npm run build` for the public site, plus Django tests/system checks for JCF. See the backend's `docs/foundation-registration.md` for the API contract and operational details.
