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

function BasicSquare({endingList=[], principleP}) {
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
      <div className='verb-table-header-text'>Active</div>
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
          <BasicSquare/>
          <BasicSquare
          endingList={["ειν"]}
          principleP={"f"}
          />
          <BasicSquare
          endingList={['αι']}
          principleP={'a'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <div className='verb-table-row-label'>Part.</div>
          <BasicSquare
          endingList={['ων, ', 'ονσα, ', 'ον']}
          principleP={'p'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <BasicSquare
          endingList={['ας, ', 'ασα, ', 'αν']}
          principleP={'a'}
          />
          <BasicSquare/>
          <BasicSquare/>
        </div>
      </div>
      <div className='verb-table-header-text'>Middle</div>
      <div className='verb-table'>
        <div className='verb-table-row'>
          <div className='verb-table-row-label'>Indicative</div>
          <VerbSquare 
          endingList={["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"]}
          principleP={"p"}
          />
          <VerbSquare
          endingList={["ομην", "ου", "ετο", "ομεθα", "εσθε", "οντο"]}
          principleP={"p"}
          />
          <VerbSquare 
          endingList={["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"]}
          principleP={"f"}
          />
          <VerbSquare
          endingList={['αμην', 'ω', 'ατο', 'αμεθα', 'ασθε', 'αντο']}
          principleP={'a'}
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
          endingList={["εσθαι"]}
          principleP={"p"}
          />
          <BasicSquare/>
          <BasicSquare
          endingList={["εσθαι"]}
          principleP={"f"}
          />
          <BasicSquare
          endingList={['ασθαι']}
          principleP={'a'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <div className='verb-table-row-label'>Part.</div>
          <BasicSquare
          endingList={['ομενος, ', 'ομενη, ', 'ομενον']}
          principleP={'p'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <BasicSquare
          endingList={['αμενος, ', 'αμενη, ', 'αμενον']}
          principleP={'a'}
          />
          <BasicSquare/>
          <BasicSquare/>
        </div>
      </div>
      <div className='verb-table-header-text'>Passive</div>
      <div className='verb-table'>
        <div className='verb-table-row'>
          <div className='verb-table-row-label'>Indicative</div>
          <VerbSquare 
          endingList={["ομαι", "ῃ", "εται", "ομεθα", "εσθε", "ονται"]}
          principleP={"p"}
          />
          <VerbSquare
          endingList={["ομην", "ου", "ετο", "ομεθα", "εσθε", "οντο"]}
          principleP={"p"}
          />
          <VerbSquare 
          endingList={["ησομαι", "ησῃ", "ησεται", "ησομεθα", "ησεσθε", "ησονται"]}
          principleP={"ap"}
          />
          <VerbSquare
          endingList={['ην', 'ης', 'η', 'ημεν', 'ητε', 'ησαν']}
          principleP={'ap'}
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
          endingList={["εσθαι"]}
          principleP={"p"}
          />
          <BasicSquare/>
          <BasicSquare
          endingList={["ησεσθαι"]}
          principleP={"ap"}
          />
          <BasicSquare
          endingList={['ηναι']}
          principleP={'ap'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <div className='verb-table-row-label'>Part.</div>
          <BasicSquare
          endingList={['ομενος, ', 'ομενη, ', 'ομενον']}
          principleP={'p'}
          />
          <BasicSquare/>
          <BasicSquare/>
          <BasicSquare
          endingList={['εις, ', 'εισα, ', 'εν']}
          principleP={'ap'}
          />
          <BasicSquare/>
          <BasicSquare/>
        </div>
      </div>
      </div>
    </div>
  )
}
