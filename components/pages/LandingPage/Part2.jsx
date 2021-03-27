import HIW from "../../Utils/HIW"

function Part2() {
    return (
       <HIW id={"section1"} desc={"IN THE BEGINNING"} 
       content1={`Enter the name of the bank you intend to switch from.
       Once you start typing, even from the first letter,
       our auto-suggest feature starts to give you suggestionsfrom where you can select the bank.`}
       content2 ={"Then you input your account number. "}
       content3 ={`Finally input the name of the bank you wish 
       to switch to (auto-suggest also works here)`}
       imageSrc={"/img/Group 12.png"}
       moveTo={"section2"}
       number={1}
        />
    )
}

export default Part2
