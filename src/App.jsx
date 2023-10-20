import MyCard from'./components/MyCard'

  const App = () => {
      const people =[
        {
            fullname: "Babalola Oyindamola",
            position: "CEO",
            phone: +812435876,
            location: "New York",
            email: "babaloladammie@gmail.com",
            image: "https://shorturl.at/pQZ26",
        },
        {
          fullname:"Aaliyah pachiko",
          position:"cso",
          phone: +4299967900,
          location: "Lagos",
          email: "Aaliyahphaki@gmail.com",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffemale-portrait&psig=AOvVaw1pcjOkDUbJTnyoXkaBNKZ1&ust=1697888634944000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiM7ZrGhIIDFQAAAAAdAAAAABAE",
        },
        {
          fullname: "Eniola choplife",
          position: "cmo",
          phone: +666453789,
          location: "china",
          email: "Eniolachop@gamail.com",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbusinessday.ng%2Fbd-weekender%2Farticle%2Fthe-future-is-female-but-it-is-a-certain-kind-of-female%2F&psig=AOvVaw2Ys7h5YH3NTyU6PUFMODdK&ust=1697834908046000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiZior-goIDFQAAAAAdAAAAABAE",
        },
        {
          fullname: "Adebisi Gunna",
          position: "Head security",
          phone: +55569032,
          location: "chicago",
          email: "Adebisi@gmailcom",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fmale-body.html&psig=AOvVaw1gjcCzEE3AK64HMwWK6Aro&ust=1697835200415000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCy05P_goIDFQAAAAAdAAAAABAE",
        },
        {
          fullname: "Dj khaleed",
          position: "company DJ",
          phone: +456678899,
          location: "miami",
          email: "khaleed@gmail,com",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2Fnews%2Fnbcblk%2Fdj-khaled-drops-major-keys-success-n707211&psig=AOvVaw1Pib7GLGN9KnmQvk8O34aC&ust=1697835737521000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC5-pSBg4IDFQAAAAAdAAAAABAJ",
        },
        {
          fullname: "Mary  banky Rose",
          position: "HR",
          phone: +34567890,
          location: "florida",
          Email: "marybanky@gmail,com",
          image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quora.com%2FWho-are-some-of-the-most-beautiful-women-outside-of-showbiz-in-the-world&psig=AOvVaw2-iT3dmABzwoue9ouNVcN9&ust=1697836314052000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDxkqeDg4IDFQAAAAAdAAAAABAE",
        },    
    ];
     
      return (
        <>
         <h1>ID Card</h1>
            <div>
                {people.map(({fullname, location, email, position, phone, image}, index) => (
                <MyCard key={index} 
                fullname={fullname}
                location={location}
                phone={phone}
                email={email}
                image={image}
                position={position}/>
              )
              )}
            </div>
        </>
      );
    }
    
  


export default App
