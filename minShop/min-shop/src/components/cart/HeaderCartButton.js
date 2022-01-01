import React from "react";
import CartImg from './cart.png'
import { Button } from 'react-bootstrap'
const HeaderCartButton = () => {
    return (
        <div>
            <div>
            </div>
            <Button style={{
                fontSize: "25px",
                marginRight: '50px',
                borderRadius: '10px',
                padding: '5px 25px 5px 25px',
                textTransform: 'uppercase',
                fontWeight: 'bold'

            }} variant="light">

                <img style=
                    {{
                        width: '35px',
                        marginRight:'5px'
                    }} src={CartImg} />Cart</Button>

        </div>

    )
}
export default HeaderCartButton;
