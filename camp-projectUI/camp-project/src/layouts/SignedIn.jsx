import React from 'react'
import { Dropdown,Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
      <Image src='https://media.licdn.com/dms/image/v2/D4D03AQFB7y_3HJNlEQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730277237590?e=1738800000&v=beta&t=ks3wCE8K1zLVYn2Tz1wVjQmoXbhlHHE__ZLoKhSLxV8' avatar size='min' circular />
      <Dropdown pointing="top left" text='Seval Şentürk'>
        <Dropdown.Menu>
          <Dropdown.Item icon="info" text="Profile"/>
          <Dropdown.Item icon="setting" text="Settings"/>
          <Dropdown.Item onClick={signOut} icon="sign-out" text="Log out"/>
          </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
    </div>
  )
}
