import Planet from "./Planet"


const ContactMeHome = () => {
  return (
    <div>
        <div className="min-h-screen mt-20 relative flex items-center justify-center">
              {/* Background Planet */}
              <div className="absolute  -z-10">
                <Planet />
              </div>
              
              {/* Content */}
              <div className="text-center px-8 max-w-3xl mx-auto">
                <h1 className="text-white text-6xl leading-tight mb-8 font-ObjectSans">
                  Do you want to talk about a <span className="code-blue">project</span> ?

                </h1>
                <p className="text-white text-xl max-w-2xl mx-auto code-content font-NeueMachina">
                 Whether you have a project you want to work on together or just want us to meet and have a chat, you are in the right place: let's get in touch.
                 </p>
              </div>
            </div>
    </div>
  )
}

export default ContactMeHome