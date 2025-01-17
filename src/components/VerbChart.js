import React from 'react'
import './VerbChart.css'

function VerbSquare({endingList, principleP}) {
  return (
    <div className={`verb-table-square ${principleP? principleP : ""}`}>
      <div className='verb-table-sqaure-column'>
        <div>-{endingList? endingList[0]: null}</div>
        <div>-{endingList? endingList[1]: null}</div>
        <div>-{endingList? endingList[2]: null}</div>
      </div>
      <div className='verb-table-sqaure-column'>
        <div>-{endingList? endingList[3]: null}</div>
        <div>-{endingList? endingList[4]: null}</div>
        <div>-{endingList? endingList[5]: null}</div>
      </div>
    </div>
  )
}

function BasicSquare({endingList, principleP}) {
  return (
    <div className={`verb-table-square ${principleP? principleP : ""}`}>
      <div>
        {endingList.map((ending, index) => (`-${ending}`))}
      </div>
    </div>
  )
}

export default function VerbChart() {
  return (
    <div className='verb-chart'>
      <div className='verb-chart-title-container'>
        <h1>Verb Chart</h1>
        <div className='verb-chart-color-key-container'>
          <div className='verb-chart-color-key p'>Present</div>
          <div className='verb-chart-color-key f'>Future</div>
          <div className='verb-chart-color-key a'>Aorist</div>
          <div className='verb-chart-color-key P'>Perfect</div>
          <div className='verb-chart-color-key Pm'>Perfect Middle</div>
          <div className='verb-chart-color-key ap'>Aorist Passive</div>
        </div>
      </div>
      <div className='verb-table-bg'>
      <div className='verb-table-header'>
          <div></div>
          <div className='verb-table-header-text'>Present</div>
          <div className='verb-table-header-text'>Imperfect</div>
          <div className='verb-table-header-text'>Future</div>
          <div className='verb-table-header-text'>Aorist</div>
          <div className='verb-table-header-text'>Perfect</div>
          <div className='verb-table-header-text'>Pluperfect</div>
      </div>
      <div className='verb-table'>
        <div className='verb-table-row'>
          <div className='verb-table-row-label'>Indicative</div>
          <VerbSquare 
          endingList={["ω","εις","ει","ομεν","ετε","ουσι"]}
          principleP={"p"}
          />
          <VerbSquare
          endingList={["ον", "ες", "ε(ν)", "ομεν", "ετε", "ον"]}
          principleP={"p"}
          />
          <VerbSquare 
          endingList={["ω","εις","ει","ομεν","ετε","ουσι"]}
          principleP={"f"}
          />
          <VerbSquare
          endingList={["α", "ας", "ε(ν)", "αμεν", "ατε", "αν"]}
          principleP={"a"}
          />
          <VerbSquare/>
          <VerbSquare/>
          <div className='verb-table-row-label'>Subjunctive</div>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <div className='verb-table-row-label'>Imper.</div>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <VerbSquare/>
          <div className='verb-table-row-label'>Infin.</div>
          <BasicSquare
          endingList={["ειν"]}
          principleP={"p"}
          />
          
        </div>
      </div>
      </div>
    </div>
  )
}
