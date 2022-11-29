import React, { Component } from "react";
import Newsitem from "../Newsitem";


export class News extends Component {
  articles =  [
   
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Mark Morales, Eric Levenson, Kristina Sgueglia",
      "title": "Buffalo grocery store mass shooter pleads guilty to terrorism and murder charges in racist attack - CNN",
      "description": "The gunman who killed 10 people and wounded three in May in a racist attack at a grocery store in a predominantly Black neighborhood of Buffalo, New York, pleaded guilty Monday to state charges of domestic terrorism as a hate crime, murder and attempted murde…",
      "url": "https://www.cnn.com/2022/11/28/us/buffalo-tops-grocery-shooting-payton-gendron-plea/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221128112952-tops-supermarket-memorial-file-051922.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2022-11-29T00:03:00Z",
      "content": "The gunman who killed 10 people and wounded three in May in a racist attack at a grocery store in a predominantly Black neighborhood of Buffalo, New York, pleaded guilty Monday to state charges of do… [+6663 chars]"
    
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Nicki Cox",
      "title": "Collin Gosselin: Mom Kate institutionalizing me left me 'hopeless,' in 'dark place' - Page Six",
      "description": "The 18-year-old said in a rare TV interview that his estranged mother’s decision to send him away at 12 years old did “more damage” than it did help him.",
      "url": "https://pagesix.com/2022/11/28/collin-gosselin-kate-institutionalizing-me-left-me-hopeless/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/collin-gosselin-says-kate-institutionalized-him-left-him-in-dark-place.jpg?quality=75&strip=all&w=1200",
      "publishedAt": "2022-11-29T00:01:00Z",
      "content": "Collin Gosselin says his estranged mom’s decision to institutionalize him at 12 years old caused serious “damage” and left him in a “dark place.”\r\nThe 18-year-old candidly discussed his experience at… [+3006 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Maricopa County certifies election while Cochise County refuses - 12 News",
      "description": "Republican officials in rural Cochise County refused on Monday to certify the 2022 election, despite no evidence of anything wrong with the recount.",
      "url": "https://www.youtube.com/watch?v=KxsF58G2IQI",
      "urlToImage": "https://i.ytimg.com/vi/KxsF58G2IQI/hqdefault.jpg",
      "publishedAt": "2022-11-28T23:43:51Z",
      "content": null
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "British PM Sunak says ‘golden era’ of UK-China relations is over - Al Jazeera English",
      "description": "Rishi Sunak warned Monday that China posed a ‘systemic challenge’ to UK ‘values and interests’.",
      "url": "https://www.aljazeera.com/news/2022/11/28/british-prime-minister-sunak-golden-era-of-uk-china-is-over",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/2022-11-28T211139Z_1180326887_RC29VX98HXDE_RTRMADP_3_BRITAIN-POLITICS-SUNAK.jpg?resize=1920%2C1440",
      "publishedAt": "2022-11-28T23:33:50Z",
      "content": "British Prime Minister Rishi Sunak has said China poses a systemic challenge to UK values and interests as his government condemned Beijing after a BBC journalist was beaten while covering Shanghai p… [+3488 chars]"
    },
    
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news js");
    this.state = {
      articles:this.articles,
      loading: false
    }
    }
    async componentDidMount(){
     
      let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=c87d65214d314ca58f033fcff7845e41";
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles:parsedData.articles})
    }

    handlePreviousClick = ()=>{
      console.log("Previous")
    }
    handleNextClick = ()=>{
      console.log("next");
    }

render() {
  
  
  return (
    <div className="container my-3">
      <h2>MR-NEWS ~ TOP HEADLINES</h2>
      
      <div className="row">
      {this.state.articles.map((element)=>{
  return <div className="col-md-4" key={element.url}>
      <Newsitem
        title={element.title}
        description={element.description}
        imageUrl={element.urlToImage}
        newsUrl={element.url}
      />
    </div>
    
  
}
   )}
       
      </div>
      <div className="container">
      <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
      <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>

      </div>
      </div>
    </div>
  );
}
}


export default News;
