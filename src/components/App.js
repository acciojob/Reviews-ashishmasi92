import React, { useState } from "react"


let reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];





const App = () => {

  let [review, setReview] = useState(reviews)
  let [index, setIndex] = useState(0)







  function increase() {

    if (index < reviews.length - 1) {
      setIndex(index + 1)
    }

  }


  function decrease() {

    if (index > 0) {
      setIndex(index - 1)
    }



  }

  function randomIndex() {
    let random = Math.floor(Math.random() * reviews.length)
    setIndex(random)

  }


  const currentReview = reviews[index]
  console.log(currentReview);


  return <div>
    <div className="title" >
      <h1 id="review-heading">Our Reviews</h1>
    </div>
    <article className="review" >

      <div className="container">
        <div className="img-container">
          <img src={currentReview.image} alt={currentReview.name} className="person-img" />
        </div>


        <h4 className="author" id={`author-${currentReview.id}`}>
          {currentReview.name}
        </h4>
        <p className="job" >{currentReview.job}</p>
        <p className="info">{currentReview.text} </p>

        <div className="button-container">
          <button className="prev-btn" id="prev-btn" onClick={decrease}>Previous</button>
          <button className="next-btn" id="next-btn" onClick={increase}>Next</button>
        </div>
        <button className="random-btn" onClick={randomIndex}>surprise me</button>
      </div>
    </article>





  </div>
}


export default App