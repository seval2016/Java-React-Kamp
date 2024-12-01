import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div className="outButtons">
      <Button icon labelPosition="left" color='red' onClick={signIn}>
        <Icon name="sign-in" />
        Giriş Yap
      </Button>
      <Button icon labelPosition="right"  color= 'blue'>
        <Icon name="save" />
        Kayıt Ol
      </Button>
    </div>
  );
}
