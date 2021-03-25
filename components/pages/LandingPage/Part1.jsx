import styles from './Part1.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';
import Header from '../../Tools/Header';

const useStyles = makeStyles((theme) => ({
  select: {
    '&:after': {
         borderColor: '#ff7a00',
     },
     '&:hover:not(.Mui-disabled):before': {
         borderColor: '#ff7a00',
     }
 },
 textField: {
  '& label.Mui-focused': {
    color: '#ff7a00',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ff7a00',
  },
}
}));


export default function Part1() {
  const classes = useStyles();
  const [bank1, setBank1] = React.useState('Bank');
  const [bank2, setBank2] = React.useState('Bank');
  const [accountNumber, setAccountNumber] = React.useState("")

  const firstBankHandler1 = (event) => {
    setBank1(event.target.value);
  };
  const firstBankHandler2 = (event) => {
    setBank2(event.target.value);
  };
  const checkandUpadateAcctNumber = (event)=>{
   setAccountNumber(event.target.value.replace(/[^0-9]/g, ''));
  }

  return (
     <div id="home" className={styles.hero}>
       <Header />
          <div className={styles.row1}>
          </div>
          <div className={styles.row2}>
            <div className={styles.row2Half1}>
            <img className={styles.img1Main} src="/img/image 1.png" alt="image1" />
            </div>
            <div className={styles.row2Half2}>
              <div className={styles.row2Half21}>
                  <h2 className={styles.row2Half21Content1}>YOUR BANK DEY MESS UP?</h2>
              </div>
              <div className={styles.row2Half22}>
                <h1 className={styles.row2Half22Content2}>SWITCHBANK</h1>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
              <div className={styles.row3Main}>
               <div className={styles.row3MainInner}>
                 <div className={styles.row3MainContent1}>
                     <p className={styles.row3MainContent1SwitchFrom}>Switch From:</p>
                 </div>
                 <div className={styles.row3MainContent2}>
                  <div className={styles.row3MainContent2Inner}>
                   <Select
                     className={classes.select}
                     fullWidth={true}
                     labelId="selectBankId"
                     id="selectBank"
                     value={bank1}
                     placeholder="bank"
                     onChange={(event)=>firstBankHandler1(event)}
                    >
                    <MenuItem style={{display:"none"}} value={"Bank"}>Bank</MenuItem>
                    <MenuItem value={"Access"}>Access Bank</MenuItem>
                    <MenuItem value={"First"}>First Bank</MenuItem>
                    <MenuItem value={"Gtb"}>GT Bank</MenuItem>
                    <MenuItem value={"Uba"}>UBA</MenuItem>
                   </Select>
                  </div>
                 </div>
                 <div className={styles.row3MainContent3}>
                    <div className={styles.row3MainContent3Inner}>
                     <TextField className={classes.textField} inputProps={{ maxLength: 10 }} value={accountNumber} onChange={checkandUpadateAcctNumber} id="standard-basic" label="Account Number" />
                    </div>
                  </div>
                  <div className={styles.row3MainContent4}>
                    <div className={styles.row3MainContent4Inner}>
                      <div className={styles.row3MainContent4InnerArrow}>
                       <div className={styles.row3MainContent4InnerArrowInner}>
                        <div className={styles.row3MainContent4InnerArrowInnerImg}>
                         <img className={styles.vectorArrow} src="/img/Vector 2.png" />
                        </div>
                         <div className={styles.row3MainContent4InnerArrowInnerImg}>
                          <img className={styles.vectorArrow} src="/img/Vector 1.png" />
                         </div>
                       </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row3MainContent5}>
                  <div className={styles.row3MainContent2Inner}>
                   <Select
                     className={classes.select}
                     fullWidth={true}
                     labelId="selectBankId"
                     id="selectBank"
                     value={bank2}
                     placeholder="bank"
                     onChange={(event)=>firstBankHandler2(event)}
                    >
                    <MenuItem style={{display:"none"}} value={"Bank"}>Bank</MenuItem>
                    <MenuItem value={"Kuda"}>Kuda MFB</MenuItem>
                   </Select>
                    </div>
                   </div>
                   <div className={styles.row3MainContent6}>
                    <p className={styles.row3MainContent6SwitchFrom}>Switch To:</p>
                   </div>
               </div>
              </div>
          </div>
          <div className={styles.row4}>
            <div className={styles.row4Inner}>
              SWITCH
            </div>
          </div>
        </div>
  )
}
