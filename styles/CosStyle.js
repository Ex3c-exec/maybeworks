export default function CosStyle(){
    return (
        <style jsx>
           {
               `
               :root{
                --bg-red:#a80000;
             }
             
            .TITLE{
                width: 400px;
                margin: 50px 0 50px 100px;
                font-family: 'Poppins', sans-serif; 
                color: black;
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-around;
            }
            
            .CONTAINER{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .CONTAINER-LEFT{
                width: 50%;   
                color:black;
            
            }
             .CONTAINER-LEFT h1{
                text-align: center;
                font-size: 50px;
                font-family: 'Poppins', sans-serif;
            }
            
            .CONTAINER-LEFT h2{
                text-align: center;
                font-size: 20px;
                font-family: 'Poppins', sans-serif;
            }
            
            .CONTAINER-LEFT button{
                width: 35%;
                border-radius: 25px;
                padding:10px 5px;
                color: white;
                font-family: 'Poppins', sans-serif; 
                border:0;
                margin:0 0 20px 100px; 
                background:linear-gradient(to right,red, #660000);
                font-size:20px;
            }
            
            .CONTAINER-LEFT button img{
                width: 30px;
                margin-right: 5px;
            }
            .CUPON input{
                width: 75%;
                display: block;
                margin: 0 auto 10px auto;
                border: 1px solid rgb(199, 199, 199);
                border-radius: 10px;
                background-color: white;
                height: 40px;
            }
            .CUPON label{
                font-family: 'Poppins', sans-serif; 
                display: block;
                margin:0 auto;
                width: 75%;
            
            }
            
            .TABLE{
                font-family: 'Poppins', sans-serif;
                margin:0  0 0 100px; 
                border-bottom:1px solid black;
            }
            tbody{
                color: black; 
                margin-top:20px;
            }
            th{color:black;}
            .PRODUS-IMAGINE{
                width: 100px;
            }
            
            .PRODUS-IMAGINE img{
                width:80%;
                margin:10px;
            }
            
            .CONTAINER-RIGHT{
                height: 100%;
                width: 40%;
                padding:100px;
                color:black;
            }
            
            .CONTAINER-RIGHT label{
                font-size: 15px;
                font-family: 'Poppins', sans-serif; 
                color:black;
                margin-top: 10px;
              }
            
            .CONTAINER-RIGHT input{
               width: 75%;
               border: 1px solid rgb(199, 199, 199);
               border-radius: 15px;
               background-color: white;
               height: 40px;
            }
            
            .TITLE-2 h1{
                font-family: 'Poppins', sans-serif; 
                text-align: left;
                border-bottom:1px solid gray;
                padding-bottom:20px;
            }
            
            .CONTAINER-RIGHT button{
                    width: 70%;
                    border-radius: 25px;
                    padding: 10px 5px;
                    color: white;
                    font-family: 'Poppins', sans-serif; 
                    border:0;
                    margin-top: 10px;
                    background:linear-gradient(to right,red, #660000);
            }
            
            .CONTAINER-RIGHT button img{
                width: 40px;
                margin-left: 5px;
            }
            
            .CASETE{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                margin:50px auto;
            }
            
            .LIVRARE-PLATA{
                display: block;
                width: 40%;
                height: 200px;
                background-color: white;
                color: black;
            }
            
            .TEXT{
                display: block;
                width: 100%;
                padding: 10px 5px;
                color: white;
                font-family: 'Poppins', sans-serif; 
                border:0;
                background:linear-gradient(to right,red, #660000);
                text-align: center;
             }
            .TEXT img{
                width: 30px;
                margin: 0 5px 5px 0;
            }
            
            .LIVRARE-PLATA label{
                font-family: 'Poppins', sans-serif; 
            }
            
            .LIVRARE-PLATA-CONTAINER{
                margin:10px;
            }
            
            
            /* SETARI PENTRU TELEFON */
            @media screen and (max-width:768px){
            
            
                .HEADER{
                    width: 100%;
                    flex-direction: row;
                    height: 80px;
                    justify-content: space-evenly;
                    align-items: center;
                    background-color: rgb(42, 42, 42);
                    flex-wrap: wrap;
                }
                .HEADER span{
                    background-image: url(/images/search2.png);
                    background-size: 30px;
                    height: 50px;
                    background-color: transparent;
                }
            
                .LOGO{   
                    width:50%;
                    height:60px;
                    background-size: cover;
                    border-radius: 12px;
                    box-shadow: inset 0 0 10px 8px #707070;
                    align-content: left;
                    margin-top:10px;
                }
                
                .LOGO-INPUT{
                    width: 70%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
            
                nav{
                    width: 100%;
                    margin:0;
                }
            
                .NAV-LINK{
                  text-align: center;
                  margin:0;
                }
                
                .CONTACT{
                    margin:auto;
                }
                .COS{
                    width:10%;
                    height: 50px;
                    border: 0;
                    background-image: url(/images/cos.png);
                    background-size: 30px;
                    background-color: transparent;
                    border-radius: 0;
                    background-position-x: 1px;
                    background-position-y: 8px;
                    padding-left: 30px;
                    } 
            
                .COS h5{
                    display: none;
                }
            
              
                form{
                    width:10%;
                    margin-top:15px;
                }
                .HEADER input{
                  display: none;
                }
                .HEADER span{
                    display: block;
                    border: 1px solid transparent;
                    background-position-y: 8px;
                    width: 5px;
            
            
                }
                .TITLE{
                    width: 50%;
                    margin:0;
                    justify-content: center;
                }
                .TITLE h1{
                    margin-top:14px;
                }
                .TITLE div img{
                    width:100%;
                }
                .TITLE div{
                    margin:10px;
                    width: 18%;
                }
                .CONTAINER{
                    width: 100%;
                    flex-direction: column;
                }
                .CONTAINER-LEFT{
                    width: 100%;       
                }
                .CONTAINER-LEFT button{
                    width: 55%;
                    padding:2px;
                    margin:5px;
                    font-size:12px;
                }
               .CONTAINER-LEFT h2{
                font-size: 15px;
               }
               .CONTAINER-LEFT h1{
                font-size: 22px;
                }
                .TABLE{
                    margin:0  0 0 10px; 
                    font-size: 10px;
                }
                .PRODUS-IMAGINE{
                    width: 80px;
                }
                .PRODUS-IMAGINE img{
                    margin:2px;
                }
            
                .CASETE{
                    margin:20px auto;
                }
                
                .LIVRARE-PLATA{
                    width: 45%;
                    height: auto;
                } 
                .TEXT{
                    padding: 5px;
                    font-size: 10px;
                 }
                .TEXT img{
                    width: 20px;
                    margin: 0 5px 5px 0;
                }
                
                .LIVRARE-PLATA label{
                    font-size: 12px;
                }
                .LIVRARE-PLATA-CONTAINER{
                    margin:4px;
                }
                
                .CONTAINER-RIGHT{
                    height: auto;
                    width: 100%;
                    padding:20px;
                }
            
                .TITLE-2 h1{
                    font-size: 20px;
                    padding-bottom:10px;
                }
                
                .CONTAINER-RIGHT label{
                    font-size: 12px;
                    margin-top: 10px;
                  }
                
                .CONTAINER-RIGHT input{
                   width: 100%;
                   height: 38px;
                }
                .CONTAINER-RIGHT button{
                    width: 80%;
                    font-size: 10px;
                    padding: 4px;
                    margin:auto 20px;   
                    height: 40px;  
                }
                .CONTAINER-RIGHT button img{
                width: 20px;
                }
            }
            
            /* SETARI PENTRU TABLETA */ 
            @media screen and (min-width:768px) and (max-width:1024px){
                nav{
                    width: 100%;
                    margin:0;
                    height: auto;
                }
            
                .NAV-LINK{
                  text-align: center;
                  margin:0;
                }
                
                .CONTACT{
                    margin: auto;
                }
                
                .LOGO{   
                    width:25%;
                    height:60px;
                }
                .COS {
                    width: 150px;
                    height: 70px;
                } 
                .COS h5{
                    font-size:15px;
                    letter-spacing: 0;
                }
                .TITLE{
                    width: 30%;
                    margin:0;
                    justify-content: center;
                }
                .TITLE h1{
                    margin-top:14px;
                }
                .TITLE div img{
                    width:80%;
                }
                .TITLE div{
                    margin:10px;
                    width: 18%;
                }
            
                .CONTAINER{
                    width: 100%;
                    flex-direction: column;
                }
                .CONTAINER-LEFT{
                    width: 100%;       
                }
                .CONTAINER-LEFT button{
                    width: 30%;
                    padding:2px;
                    margin:5px 20px;
                    font-size:12px;
                }
               .CONTAINER-LEFT h2{
                font-size: 15px;
               }
               .CONTAINER-LEFT h1{
                font-size: 22px;
                }
                .TABLE{
                    margin:0  0 0 10px; 
                    font-size: 10px;
                }
                .PRODUS-IMAGINE{
                    width: 80px;
                }
                .PRODUS-IMAGINE img{
                    margin:2px;
                }
                
                .LIVRARE-PLATA{
                    width: 45%;
                    height: auto;
                } 
                .TEXT{
                    padding: 5px;
                    font-size: 10px;
                 }
                .TEXT img{
                    width: 20px;
                    margin: 0 5px 5px 0;
                }
                
                .LIVRARE-PLATA label{
                    font-size: 12px;
                }
                .LIVRARE-PLATA-CONTAINER{
                    margin:4px;
                }
                
                .CONTAINER-RIGHT{
                    height: auto;
                    width: 90%;
                    padding:20px;
                    margin: auto
                }
            
                .TITLE-2 h1{
                    font-size: 20px;
                    padding-bottom:10px;
                }
                
                .CONTAINER-RIGHT label{
                    font-size: 12px;
                    margin-top: 10px;
                  }
                
                .CONTAINER-RIGHT input{
                   width: 90%;
                   height: 38px;
                }
                .CONTAINER-RIGHT button{
                    width: 80%;
                    font-size: 10px;
                    padding: 4px;
                    margin:auto 20px;   
                    height: 40px;  
                }
                .CONTAINER-RIGHT button img{
                width: 20px;
                }
            
            } 
            
            /* SETARI PENTRU ECRAN MAI MARE DE 1024PX */
            @media screen and (min-width:1024px) and (max-width:1680px){
            
            
                    .LOGO{   
                        width:22%;
                        height:77px;
                    }
                    .CONTAINER-RIGHT{
                        width: 40%;
                        margin: auto;
                        padding: 50px 0 20px 30px;
                    }
            
                    .CONTAINER-LEFT{
                        width: 60%;   
                        color:black;
                    
                    }
                     .CONTAINER-LEFT h1{
                        font-size: 45px;
                    }
                       
                    .CONTAINER-LEFT button{
                        width: 40%;
                        padding:10px 5px;
                        font-size:15px;
                    }
                    
                    .CONTAINER-LEFT button img{
                        width: 30px;
                        margin-right: 5px;
                    }
                    .TABLE{
                        margin:0  0 0 10px; 
                        font-size: 15px;
                    }
                    .PRODUS-IMAGINE{
                        width: 80px;
                    }
                    .PRODUS-IMAGINE img{
                        margin:2px;
                    }
                    
                    .CONTAINER-RIGHT input{
                       width: 80%;
                    }
                    
                    .TITLE-2 h1{
                     font-size: 30px;
                    }
                    
                }
               `
           } 
        </style>
    )
}