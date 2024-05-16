import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import Footer from "../src/components/Footer/Footer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "Udit Verma Personal Portfolio"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="assets/icons/U_Favicon.png" />
  
   
    
<meta name="description" content={`${desc || 'Udit Verma is a Computer Science student at George Mason University specializing in Machine Learning and Artificial Intelligence, with hands-on experience in developing innovative projects and internships that enhance data processing, system security, and operational efficiency.'}`} />

{/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}
   
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <meta name="description" content="Site Meta Description" /> */}
    <meta name="keywords" content="Personal Portfolio" />
    <meta name="author" content="Udit Verma" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="Personal Portfolio | Blog"/>
    <meta name="page-type" content="Blogging"/>
    <meta name="audience" content="Everyone"/>
  
  
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <Box 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 