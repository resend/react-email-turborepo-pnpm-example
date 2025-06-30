import { render } from '@react-email/components';

import { VercelInviteUserEmail } from 'transactional/emails/vercel-invite-user';

export default function Page(): JSX.Element {
  const emailHTML = render(VercelInviteUserEmail({}));

  // biome-ignore lint/security/noDangerouslySetInnerHtml: Accepted
  return <div dangerouslySetInnerHTML={{ __html: emailHTML }} />;
}
