import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '30px' }}>
            <div>
                <img src="whatsapp-logo-png.png" className="SocialMedia" style={{ cursor: "pointer" }} />
                <img src="facebook-13.png" className="SocialMedia" style={{ cursor: "pointer" }} />
                <p> Fone: (48) 3466-1911</p>
                <p> Endereço: Orleans, Centro, Rua Uganda.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <p>Todos os direitos reservados para HAMP Soft.</p>
            </div>
        </footer>
    );
};

export default Footer;