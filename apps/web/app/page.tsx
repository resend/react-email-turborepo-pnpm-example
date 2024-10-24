import { render } from "@react-email/components";

import { VercelInviteUserEmail } from "transactional/emails/vercel-invite-user";

export default async function Page() {
  const emailHTML = await render(<VercelInviteUserEmail />);

  return <div dangerouslySetInnerHTML={{ __html: emailHTML }} />;
}
