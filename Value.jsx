import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import './Value.css'
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
              <div className="image-container">
                <img src="./value.png" alt="" />
              </div>
            </div>

            <div className="flexColStart v-right">
              <span className='orangeText'>Our Value</span>
              <span className='primaryText'>Value We give to You</span>
              <span className='secondaryText'>We are always ready to help provide you the best services.
                <br />
                We believe a good place to live can make your life better.
              </span>

              <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
              {
                  data.map((item, i) => {
                    return (
                      <AccordionItem className="accordionItem" key={i} uuid={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton className='flexCenter accordionButton'>
                            <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">
                              {item.heading}
                            </span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={15}/>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>

                      </AccordionItem>
                    )
                  })
              }
              </Accordion>

            </div>

        </div>
      </section>
    </div>
  )
}

export default Value
