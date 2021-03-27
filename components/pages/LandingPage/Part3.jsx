import HIW from "../../Utils/HIW"
import { Link } from "react-scroll";

function Part3() {
    return (
      <HIW id={"section2"} desc={"ENTER DETAILS"} 
      content1={` If you are not logged in you will be required to, then you will have to fill 
      other neccessary details the bank you want to switch to might require.`}
      content2 ={"After this, you’ll have to confirm the switch by inputting the OTP that would be sent to you."}
      imageSrc={"/img/Group 19.png"}
      moveTo={"section3"}
      number={2}
       />
    )
}

export default Part3
