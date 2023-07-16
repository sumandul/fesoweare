import { Breadcrumb } from "antd";

import Link from "next/link";
import { useRouter } from "next/router";
const BreadCrumb = (component:any)=>{
  console.log(component.component)
  const router = useRouter();
  const currentRoute = router.pathname;
 
  return(
    <>
    <div className="breadcrumb-section my-4">
<Breadcrumb separator=">">
  <Breadcrumb.Item>
    <Link href="/" className={currentRoute === '/' ? "text-red-50" : "text-yellow-100"} >Home</Link>
  </Breadcrumb.Item>
  {/* <Breadcrumb.Item><Link href="/">Electronics</Link></Breadcrumb.Item> */}
  {/* <Breadcrumb.Item><Link href="/">Laptops</Link></Breadcrumb.Item> */}
  <Breadcrumb.Item className="active-breadcrumb active:text-red-100">{component.component}</Breadcrumb.Item>
</Breadcrumb>
</div>
    </>
  )
}
export default BreadCrumb;

