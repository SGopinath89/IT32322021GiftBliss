import React, { useState }from 'react'
import { MdOutlineMail } from 'react-icons/md'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { FaCreditCard, FaLongArrowAltLeft } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import '../CSS/PaymentDetails.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';

// npm install @mui/material @emotion/react @emotion/styled

const PaymentDetails = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const items = [
    { id: 1, name: 'Item 1', price: 50 },
    { id: 2, name: 'Item 2', price: 70 },
    { id: 3, name: 'Item 3', price: 90 },
  ];

  return (
    <div className='paymentDetails'>
      <div className='leftSide'>
        <div className='payform'>
          {/* <div className='logo'>
            <img alt="Logo" src='./images/header_logo1.png'/>
          </div> */}
          <div>
            <button className='backArrow'><FaLongArrowAltLeft/></button>
          </div>

          <div className='paymentDetailsform' >
            <form>
              <div>
                <h2>Payment details</h2>
                <p>Complete Your Purchase by providing payment details here</p>
              </div>
              <div className='formDetails '> 
                <Box sx={{minWidth:200}}>
                  <FormControl fullWidth>
                    <div className='email'>
                      <label className='label'>Email</label>
                      {/* <MdOutlineMail/>
                      <input type='email' ></input> */}
                      <div className="input-container">
                          <MdOutlineMail className="icon" />
                          <input type="email" className="input-field"  />
                      </div>
                    </div>
                    <div className='cardtype'>
                      <label className='label'>Card Type</label>
                      <div className="card-options" >
                        <label className={`card-option ${selectedCard === 'mastercard' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="cardType"
                            value="mastercard"
                            checked={selectedCard === 'mastercard'}
                            onChange={() => handleCardSelect('mastercard')}
                          />
                          <img src='./images/masterCard.png' alt="MasterCard" />
                        </label>
                        <label className={`card-option ${selectedCard === 'visa' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="cardType"
                            value="visa"
                            checked={selectedCard === 'visa'}
                            onChange={() => handleCardSelect('visa')}
                          />
                          <img src='./images/visaCard.png' alt="Visa" />
                        </label>
                        <label className={`card-option ${selectedCard === 'amex' ? 'selected' : ''}`}>
                          <input
                            type="radio"
                            name="cardType"
                            value="amex"
                            checked={selectedCard === 'amex'}
                            onChange={() => handleCardSelect('amex')}
                          />
                          <img src='./images/amex.png' alt="Amex" />
                        </label>
                      </div>
                    </div>
                    <div className='cardnumber'>
                      <label className='label'>Card Number</label>
                      <div className="input-container">
                        <FaCreditCard className='icon'/>
                        <input type='text' className="input-field" ></input>
                      </div>
                      
                    </div>
                    {/* <div className='expiration'>
                      <label className='label'>Expiration</label>
                      <div className="input-container">
                        <input type='month' className="input-field" placeholder='YYYY-MM'></input>
                      </div>
                    </div>
                    <div className='cvv'>
                      <label className='label'>CVV</label>
                      <div className="input-container">
                        <input type='text' className="input-field"></input>
                      </div>
                    </div> */}
                    <div className='expiration-cvv'>
                      <div className='expiration'>
                        <label>Expiration</label>
                        <input type='month' className="input-field"></input>
                      </div>
                      <div className='cvv'>
                        <label>CVV</label>
                        <div className="cvv-icon-container">
                            <IoMdInformationCircleOutline className='cvvicon'/>
                        </div>
                        <div className="input-container">
                          <input type='text' className="input-field"></input> 
                        </div>
                      </div>
                    </div>
                    <div className='paybutton'>
                    <input type='submit' className="button" value="Pay"></input>
                      <p><RiSecurePaymentFill/>Payment is secured and encrypted</p>
                    </div>     
                  </FormControl>
                </Box> 
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='rightside'>
        {/* {selectedItem && (
            <div className='purchaseDetails'>
              <img src={`../images/${selectedItem.id}.jpg`} alt={selectedItem.name} />
              <div className='itemDetails'>
                <h3>{selectedItem.name}</h3>
                <p>Price: ${selectedItem.price}</p>
              </div>
            </div>
          )
        }
        <hr/>
        <div className='costDetails'>
          {selectedItem && (
            <>
              <div className='costItem'>
                <p>Subtotal:</p>
                <p>${selectedItem.price}</p>
              </div>
              <hr />
              <div className='costItem'>
                <p>Shipping:</p>
                <p>$5</p>
              </div>
              <hr />
              <div className='costItem'>
                <p>Total:</p>
                <p>${selectedItem.price + 5}</p>
              </div>
            </>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default PaymentDetails
