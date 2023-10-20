import './MyCard.css'

const MyCard = ({fullname, location, phone, email, image, position}) => {
   return(
    <div className='container'>
        <div className='card'>
            <div>
                <img src={image} alt="" />
            </div>
          
        
        <div >
            <h3 className='title'> {fullname}</h3>
        </div>
        <div>
            <p>{phone}</p>
            <p>{location}</p>
            <p>{email}</p>
            <p>{position}</p>
        </div>
       </div>
    </div>
   ) 
}

export default MyCard