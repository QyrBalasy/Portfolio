import React from 'react'

const MyServices = () => {
  return (
    <section>
      <h2>my services</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. lorem ipsum
      </p>
      <ServicesCards />
      <h2>Price plans</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. lorem ipsum
      </p>
      <PriceCards/>
    </section>
  )
}
export default MyServices


const ServicesCards = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <span>img is here</span>
        <h4>web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div>
        <span>img is here</span>
        <h4>uI/uX design</h4>
        <p>Mobile app, website design</p>
      </div>
      <div>
        <span>img is here</span>
        <h4>sound design</h4>
        <p>Voice Over, Beat Making</p>
      </div>
    </div>
  )
}

const PriceCards = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <h3>silver</h3>
        <h2>$0.00</h2>
        <p>For most businesses that want to optimize web queries</p>
        <ul>
          <li>UI Design</li>
          <li>web development</li>
          <li>logo design</li>
          <li>seo optimization</li>
          <li>wordPress integration</li>
          <li>5 Websites</li>
          <li>unlimited user</li>
          <li>20 gB bandwith</li>
        </ul>
      </div>
      <div>
        <h3>silver</h3>
        <h2>$0.00</h2>
        <p>For most businesses that want to optimize web queries</p>
        <ul>
          <li>UI Design</li>
          <li>web development</li>
          <li>logo design</li>
          <li>seo optimization</li>
          <li>wordPress integration</li>
          <li>5 Websites</li>
          <li>unlimited user</li>
          <li>20 gB bandwith</li>
        </ul>
      </div>
      <div>
        <h3>silver</h3>
        <h2>$0.00</h2>
        <p>For most businesses that want to optimize web queries</p>
        <ul>
          <li>UI Design</li>
          <li>web development</li>
          <li>logo design</li>
          <li>seo optimization</li>
          <li>wordPress integration</li>
          <li>5 Websites</li>
          <li>unlimited user</li>
          <li>20 gB bandwith</li>
        </ul>
      </div>
    </div>
  )
}
