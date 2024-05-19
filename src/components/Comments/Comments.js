"use client";

import { FacebookProvider, Comments } from "react-facebook";

export default function CommentsExample({ href }) {
  return (
    <FacebookProvider appId="2170502263309561" language="vi_VN">
      <Comments href={href} width="100%" />
    </FacebookProvider>
  );
}
