import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        
        <body >
            <img src="/assets/estuaire.webp" alt="" width="100%" height="200%" style={{ position: 'absolute', zIndex: -1 }} />
            <div  style={{display: 'flex' ,margin: 0, fontFamily: 'Arial, sans-serif', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <div className='flex flex-col lg:flex-row' style={{  width: '80%', height: '80%', boxShadow: '4px 8px 10px rgba(0, 0, 0, 0.1)' }}>
                    <center style={{ flex: 1, padding: '2rem', backgroundColor: '#EC7D3A', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className="lg:text-[2rem] text-lg " style={{ margin: '0 0 1rem', color: '#1f2937',fontWeight: 'bold' }}>Il n'y a pas de meilleur endroit que chez soi.</h2>
                        <img src="/graphic3.svg" alt="Illustration" width={"60%"}/>
                    </center>

                    <div style={{ flex: 1, padding: '2rem', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {children}
                    </div>

                </div>
            </div>
        </body>

    );
};

