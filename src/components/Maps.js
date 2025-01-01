import React from 'react'

const Maps = () => {
  return (
    <>
      <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.2983412585645!2d77.378421!3d28.625291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3260c6761%3A0x2ecd01b8bfe74df2!2sBSI%20Business%20Park%20H161%20Sector%2063%20Noida!5e0!3m2!1sen!2sus!4v1735728706972!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{
          width: '100%',
          height: '100%',
          border: '0',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  )
}

export default Maps
