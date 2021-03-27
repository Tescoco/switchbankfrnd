import HIW from "../../Utils/HIW"

function Part4() {
    return (
      <HIW id={"section3"} desc={"WHAT EVER HAS A BEGINNING..."} 
      content1={` After confirmation, the switching process starts. 
       Depending on the bank you switched to/from, your old/new account 
       type and how much you have in your account,
       your switch can take from few seconds to several days.`}
      content2 ={`Finally, once the switch is completed, you’ll 
       receive a notification containng your banking details 
       from the new bank and there ends your worry until...`}
      imageSrc={"/img/Group 20.png"}
      moveTo={"section4"}
      number={3}
       />
    )
}

export default Part4
