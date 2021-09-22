import React from 'react'
import { education } from '../../fakeAPI';

export default function EducationDetails(props) {
  console.log(props);

  const { schoolName } = props.match.params;
  const foundSchool = education.find(school => school.schoolName === schoolName);

  return (
    <section>
      { foundSchool && 
        <div>
          <h1>{foundSchool.schoolName}</h1>
          <p>Place: {foundSchool.city} - {foundSchool.country}</p>
          <p>Degree: {foundSchool.degree}</p>
          <p>{foundSchool.schoolStarted} - {foundSchool.schoolEnded}</p>
        </div>
      }
    </section>
  )
}


// export default class EducationDetails extends React.Component {
//   state = {
//     school: null
//   }
//   componentDidMount(){
//     const { schoolName } = this.props.match.params;
//     axios.get(`http://localhost:3001/api/education/${schoolName}`)
//     .then(school => {
//       this.setState({
//         ...this.state,
//         school
//       })
//     })
//   }
  
//   render(){
//     const { schoolName } = this.props.match.params;
//     return (
//       <section>
//         {
//           school ?
//           <h1>{schoolName}</h1>
//           : <p>Loading...</p>
//         }
//       </section>
//     )
//   }
// }