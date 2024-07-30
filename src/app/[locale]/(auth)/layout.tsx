import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <body style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <img src="/assets/estuaire.webp" alt="" width="100%" height="100%" style={{ position: 'absolute', zIndex: -1 }} />
            <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', width: '80%', height: '80%', boxShadow: '4px 8px 10px rgba(0, 0, 0, 0.1)' }}>
                    <center style={{ flex: 1, padding: '2rem', backgroundColor: '#EC7D3A', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ margin: '0 0 1rem', color: '#1f2937', fontSize: '2rem', fontWeight: 'bold' }}>Il n'y a pas de meilleur endroit que chez soi.</h2>
                        <img src="/logo-light.svg" alt="Illustration" style={{ width: '100%' }} />
                    </center>
                    <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {children}
                    </div>
                </div>
            </div>
        </body>

    );
};

