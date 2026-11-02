import { ImageResponse } from "next/og";
export const alt="Rounak Gera | AI/ML Engineer & Full Stack Developer";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:90,background:"#f7f8fa",color:"#181b24",fontFamily:"sans-serif"}}><div style={{fontSize:24,color:"#3e56d8",marginBottom:22}}>AI/ML ENGINEER · RESEARCH TO PRODUCTION</div><div style={{fontSize:76,fontWeight:700,letterSpacing:-4}}>Rounak Gera</div><div style={{fontSize:34,marginTop:18,color:"#636a79"}}>AI that works in the real world.</div><div style={{position:"absolute",right:86,bottom:62,fontSize:20,color:"#3e56d8"}}>Medical imaging · RAG · Full-stack</div></div>,size)}
