

import { Link } from "@tanstack/react-router"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../@/components/ui/navigation-menu"

export default function Header() {
  return (
    <h1>meow</h1>
    // <header className="flex">
    //   <div> 

    

    //   </div>
    //   <div className="options flex">
    //     <NavigationMenu >
    //       <NavigationMenuList>

    //         <NavigationMenuItem>

    //           <NavigationMenuTrigger className="text-lg">seaweed</NavigationMenuTrigger>

    //           <NavigationMenuContent className="flex justify-center p-2 flex-wrap text-center l">

    //             <Link to="./medicines?type=cali">
    //               <p className="p-2">cali</p>
    //             </Link>

    //             <Link to="./medicines?type=chemol&haze">
    //               <p className="p-2">chemol haze</p>
    //             </Link>

    //             <Link to="./medicines?type=bagniak">
    //               <p className="p-2">bagniak</p>
    //             </Link>

    //           </NavigationMenuContent>

    //         </NavigationMenuItem>

    //       </NavigationMenuList>


    //     </NavigationMenu>

    //     <NavigationMenu >
    //       <NavigationMenuList>

    //         <NavigationMenuItem>

    //           <NavigationMenuTrigger className="text-lg">medicines</NavigationMenuTrigger>

    //           <NavigationMenuContent className="flex justify-center p-2 flex-wrap text-center">

    //             <Link to="./medicines?type=zzz">
    //               <p className="p-2">zzz</p>
    //             </Link>

    //             <Link to="./medicines?type=555">
    //               <p className="p-2">55</p>
    //             </Link>

    //             <Link to="./medicines?type=111">
    //               <p className="p-2">111</p>
    //             </Link>

    //           </NavigationMenuContent>


    //         </NavigationMenuItem>

    //       </NavigationMenuList>


    //     </NavigationMenu>
    //   </div>
    // </header>


  )
}

