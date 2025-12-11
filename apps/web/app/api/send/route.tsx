import { render } from "@react-email/components";
import VercelInviteUserEmail from "transactional/emails/vercel-invite-user";

export async function GET() {
  return new Response(await render(<VercelInviteUserEmail />), {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
