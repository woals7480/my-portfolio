import Link from "next/link";
import * as S from "./contacts.styles";
import { EmailOutlined, Phone, GitHub } from "@mui/icons-material";

export default function ContactsPage() {
  return (
    <S.Wrapper>
      <S.Title>Contacts</S.Title>
      <S.ContactsWrapper>
        <S.Contact>
          <EmailOutlined style={{ marginRight: "0.3rem" }} />{" "}
          woals7480@gmail.com
        </S.Contact>
        <S.Contact>
          <Phone style={{ marginRight: "0.3rem" }} /> 010-8440-7480
        </S.Contact>
        <S.Contact>
          <Link
            href="https://github.com/woals7480/"
            target="_blank"
            style={{ textDecoration: "none", color: "#333", display: "flex" }}
          >
            <GitHub style={{ marginRight: "0.3rem" }} /> Github
          </Link>
        </S.Contact>
      </S.ContactsWrapper>
    </S.Wrapper>
  );
}
