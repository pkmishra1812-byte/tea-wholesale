import { useState } from "react";

const tabs = [
  {
    id: "mission",
    label: "Our Mission",
    title: "Our Mission",
    content: `At Indian Soya & Spice Industries, our mission is to deliver safe, high-quality and affordable essentials through innovation, integrity and sustainable practices — while empowering the communities we serve.

We are committed to sourcing the finest raw materials from trusted gardens and suppliers across India. Every product that leaves our facility undergoes rigorous quality checks to ensure it meets the highest standards of taste, freshness, and safety.

Our mission extends beyond business. We actively invest in the communities where we operate — supporting local farmers, creating employment opportunities, and contributing to sustainable development initiatives that uplift the lives of those around us.

Through continuous innovation and a customer-first approach, we strive to make quality products accessible to every household, ensuring that trust and reliability remain at the heart of everything we do.`,
  },
  {
    id: "values",
    label: "Our Values",
    title: "Our Values",
    content: `Integrity, Quality, Innovation, Sustainability and Care — the five commitments that guide every product we make and every relationship we build.

Integrity is the foundation of our business. We operate with honesty and transparency in all our dealings, building trust with our customers, partners, and employees. Our word is our bond, and we hold ourselves accountable to the highest ethical standards.

Quality is non-negotiable. From sourcing raw materials to the final product on the shelf, we maintain uncompromising quality at every stage. Our state-of-the-art facilities and experienced quality assurance teams ensure that every product meets international standards.

Innovation drives our growth. We continuously invest in research and development to bring new products, improved formulations, and sustainable packaging solutions to market. Our culture of innovation keeps us ahead in a rapidly evolving industry.

Sustainability is our responsibility. We are committed to reducing our environmental footprint through eco-friendly practices, sustainable sourcing, and responsible manufacturing. We believe in building a business that future generations can be proud of.

Care is at the heart of our relationships. We care deeply about our customers, our employees, our partners, and the communities we serve. This care manifests in the quality of our products, the warmth of our service, and the positive impact we create.`,
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Our Vision",
    content: `To become the most trusted FMCG company in India — a name that enriches everyday lives by putting quality, care and reliability within reach of every home.

We envision a future where Indian Soya & Spice Industries is synonymous with trust and quality across every household in India. Our goal is to build a brand that stands for excellence, integrity, and care in every product we deliver.

We aspire to create a seamless supply chain that connects the finest gardens and farms directly to consumers, ensuring freshness and quality at every step. Our vision includes expanding our reach to every corner of India while maintaining the personal touch and attention to detail that defines us.

Beyond borders, we aim to take Indian quality to the world — showcasing the best of Indian manufacturing and craftsmanship on global platforms. We want to be recognized not just as a leading FMCG company, but as a brand that truly makes a difference in people's lives.

This vision is powered by our people, our values, and our unwavering commitment to excellence. Every employee at Indian Soya & Spice Industries is a custodian of this vision, working together to build a legacy of trust and quality.`,
  },
  {
    id: "ethics",
    label: "Ethics & Governance",
    title: "Ethics & Governance",
    content: `At Indian Soya & Spice Industries, ethics and governance are not just policies — they are the bedrock of our identity. We believe that sustainable business success is built on a foundation of integrity, accountability, and responsible leadership.

Our governance framework ensures transparency in decision-making, fairness in all business dealings, and compliance with applicable laws and regulations. We maintain a zero-tolerance approach to corruption, fraud, and any form of unethical conduct across our operations.

We have established a robust Code of Conduct that applies to every employee, contractor, and business partner. This code outlines our expectations for ethical behavior, including anti-bribery provisions, conflict of interest guidelines, and data protection standards.

Our Board of Directors provides oversight and guidance, ensuring that the company's strategic direction aligns with our values and long-term commitments. Regular audits, both internal and external, help us maintain the highest standards of corporate governance.

We encourage a culture of speaking up. Our whistleblower policy provides a safe and confidential channel for reporting concerns without fear of retaliation. Every report is investigated promptly and thoroughly.`,
  },
  {
    id: "quality",
    label: "Quality Assurance",
    title: "Quality Assurance",
    content: `Quality is not just a department at Indian Soya & Spice Industries — it is a culture that permeates every aspect of our operations. From the moment raw materials arrive at our facilities to the final product that reaches your hands, quality checks are embedded at every stage.

Our quality assurance team follows international standards including ISO, FSSAI, and GMP guidelines. We conduct rigorous testing for purity, consistency, safety, and shelf life to ensure that every product meets the expectations of our consumers.

We invest in advanced laboratory equipment and employ skilled quality professionals who are passionate about maintaining the highest standards. Our testing protocols include microbiological analysis, chemical testing, sensory evaluation, and packaging integrity checks.

Continuous improvement is at the heart of our quality philosophy. We regularly review and update our processes based on the latest industry developments, customer feedback, and regulatory changes. This proactive approach ensures that we stay ahead of quality challenges.

Our commitment to quality extends to our supply chain. We work closely with our suppliers and partners to ensure that raw materials meet our stringent specifications before they enter our production process.`,
  },
  {
    id: "sustainability",
    label: "Sustainability",
    title: "Sustainability",
    content: `Sustainability is integral to how we operate at Indian Soya & Spice Industries. We recognize that our business has an impact on the environment, our communities, and future generations, and we are committed to minimizing that impact while maximizing positive outcomes.

We are actively working towards reducing our carbon footprint through energy-efficient manufacturing processes, waste minimization programs, and the adoption of renewable energy sources across our facilities.

Our packaging initiatives focus on reducing plastic usage and increasing the use of recyclable and biodegradable materials. We are continuously exploring innovative packaging solutions that protect product quality while minimizing environmental impact.

Water conservation is a priority across our operations. We have implemented water recycling systems, rainwater harvesting, and efficient water usage protocols to reduce our consumption and protect this precious resource.

We believe in sourcing responsibly. Our partnerships with farmers and suppliers emphasize sustainable agricultural practices, fair trade principles, and environmental stewardship. By supporting sustainable farming, we ensure the long-term viability of the raw materials our products depend on.

Community engagement is a cornerstone of our sustainability efforts. We invest in education, healthcare, and infrastructure development in the areas where we operate, creating lasting positive change beyond our business operations.`,
  },
  {
    id: "innovation",
    label: "Innovation & R&D",
    title: "Innovation & R&D",
    content: `Innovation is the driving force behind our growth at Indian Soya & Spice Industries. Our dedicated Research & Development team works tirelessly to develop new products, improve existing formulations, and create solutions that meet the evolving needs of Indian consumers.

We invest significantly in R&D infrastructure, including state-of-the-art laboratories, pilot production facilities, and testing centers. This investment enables us to move quickly from concept to market, ensuring that our products are both innovative and of the highest quality.

Our innovation process is consumer-centric. We invest time in understanding consumer needs, preferences, and pain points. This deep understanding informs our product development process, ensuring that every innovation solves a real problem or fulfills a genuine need.

Collaboration is key to our innovation strategy. We partner with academic institutions, research organizations, and technology providers to stay at the forefront of food science, packaging technology, and sustainable manufacturing practices.

From developing new flavor profiles to creating healthier formulations, from improving packaging sustainability to optimizing supply chain efficiency — innovation touches every part of our business. We believe that continuous improvement and creative thinking are essential to staying relevant in a dynamic market.`,
  },
  {
    id: "community",
    label: "Community Impact",
    title: "Community Impact",
    content: `At Indian Soya & Spice Industries, we believe that a successful business must also be a responsible corporate citizen. Our community impact initiatives are designed to create meaningful, lasting change in the areas where we live and work.

We support education through scholarships, school infrastructure development, and digital literacy programs. By investing in education, we are helping to build a brighter future for the next generation of Indian leaders and innovators.

Healthcare accessibility is another priority. We organize health camps, support local healthcare facilities, and run awareness campaigns on nutrition, hygiene, and wellness. Access to quality healthcare is a fundamental right, and we are committed to helping bridge the gap.

We actively support local artisans, craftspeople, and small businesses through our supply chain and community programs. By creating economic opportunities at the grassroots level, we contribute to the economic development of rural and semi-urban India.

Environmental conservation efforts include tree plantation drives, waste management programs, and clean water initiatives. We work with local communities to protect and restore natural resources that are vital to both people and the planet.

Our employee volunteer program encourages our team members to give back to their communities. Whether it's mentoring students, participating in cleanliness drives, or supporting local charities, our employees are passionate about making a difference.`,
  },
];

export default function VisionMissionValues() {
  const [activeTab, setActiveTab] = useState("mission");

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-0">

          {/* ── Left Sidebar ── */}
          <div className="lg:border-r lg:border-gray-200 lg:pr-8 overflow-y-auto lg:max-h-[600px]">
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                   className={`shrink-0 text-left px-5 py-3 sm:rounded-lg font-poppins font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#2E5AAC] text-white shadow-md"
                      : "text-[#A0A0A0] hover:bg-[#2E5AAC]/10 hover:text-[#2E5AAC]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right Content ── */}
          <div className="lg:pl-10 min-h-[400px]">
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h2 className="font-display text-[#1a2942] text-2xl lg:text-3xl font-bold mb-4">
                {active.title}
              </h2>
            </div>
            <div className="space-y-5">
              {active.content.split("\n\n").map((para, i) => (
                <p key={i} className="font-body text-[#333] text-[15px] leading-[1.8]">
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
