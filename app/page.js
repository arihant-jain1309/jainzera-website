export default function Home() {
  return (
    <main style={{background:"#000",color:"#fff",minHeight:"100vh",padding:"40px"}}>
      <div style={{textAlign:"center"}}>
        <img
          src="/logo.png"
          alt="logo"
          style={{
            width:"180px",
            borderRadius:"20px"
          }}
        />

        <h1 style={{
          fontSize:"70px",
          marginTop:"20px"
        }}>
          JainZEra
        </h1>

        <p style={{
          color:"#aaa",
          fontSize:"22px"
        }}>
          Premium Streetwear Fashion Brand
        </p>

        <div style={{
          marginTop:"40px",
          display:"flex",
          gap:"20px",
          justifyContent:"center",
          flexWrap:"wrap"
        }}>
          <a
            href="https://wa.me/918358025165"
            style={{
              background:"#fff",
              color:"#000",
              padding:"15px 30px",
              borderRadius:"15px",
              textDecoration:"none",
              fontWeight:"bold"
            }}
          >
            Order Now
          </a>

          <a
            href="https://www.instagram.com/jainzera?igsh=d3g0OWs5ZDV1b2di"
            style={{
              border:"1px solid white",
              padding:"15px 30px",
              borderRadius:"15px",
              textDecoration:"none",
              color:"white"
            }}
          >
            Instagram
          </a>
        </div>
      </div>

      <div style={{
        marginTop:"100px",
        textAlign:"center"
      }}>
        <h2 style={{
          fontSize:"40px"
        }}>
          Featured Collection
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"30px",
          marginTop:"50px"
        }}>
          {[1,2,3].map((item)=>(
            <div
              key={item}
              style={{
                background:"#111",
                borderRadius:"20px",
                overflow:"hidden"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200"
                style={{
                  width:"100%",
                  height:"350px",
                  objectFit:"cover"
                }}
              />

              <div style={{
                padding:"20px"
              }}>
                <h3>Oversized Streetwear</h3>

                <a
                  href="https://wa.me/917746947474"
                  style={{
                    display:"inline-block",
                    marginTop:"15px",
                    background:"#fff",
                    color:"#000",
                    padding:"12px 25px",
                    borderRadius:"12px",
                    textDecoration:"none",
                    fontWeight:"bold"
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
