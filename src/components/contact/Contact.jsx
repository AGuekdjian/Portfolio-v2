import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import { useForm } from "../../hooks/useForm";

export default function Contact() {
  const { form, changed } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", form);
    // Resetear el formulario después del envío
  };

  return (
    <section id="Contacto" className="px-8 h-screen sm:pt-28 mt-40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 flex gap-x-3 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MailIcon className="w-8 h-8" />
          Contáctame
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={changed}
                  required
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={changed}
                  required
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={changed}
                  required
                  rows="4"
                  className="resize-none w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-md hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition duration-300 flex items-center justify-center"
              >
                <SendIcon className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Información de contacto
            </h3>
            <div className="flex items-start space-x-4">
              <MailIcon className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">anthonyguekdjian@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <p className="text-gray-400">+598 98452454</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <h4 className="font-medium">Ubicación</h4>
                <p className="text-gray-400">Montevideo, Uruguay</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
