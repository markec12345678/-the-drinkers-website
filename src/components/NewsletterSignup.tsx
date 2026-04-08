import { motion } from 'framer-motion';
import { useState } from 'react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setEmail('');
    setLoading(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [20, -20, 20],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              STAY CONNECTED
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get exclusive updates, new releases, and special offers directly to your inbox.
          </p>
        </motion.div>

        {/* Newsletter form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="relative"
        >
          <div className="relative flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-gray-900 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all disabled:opacity-50"
            >
              {loading ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ⏳
                </motion.span>
              ) : (
                'SUBSCRIBE'
              )}
            </motion.button>
          </div>

          {/* Glow effect on focus */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg blur-xl opacity-0 -z-10"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.form>

        {/* Success message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg text-green-400 font-bold"
          >
            ✓ Thanks for subscribing! Check your email for confirmation.
          </motion.div>
        )}

        {/* Privacy notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-500 text-sm"
        >
          We respect your privacy. No spam, only updates from The Drinkers.
        </motion.p>
      </div>
    </section>
  );
};
