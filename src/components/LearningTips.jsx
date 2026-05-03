import React from "react";

const LearningTips = () => {
  return (
    <div className="mb-8">
      <div className="max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          📌 Learning Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Study Techniques */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">🧠 Study Techniques</h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Active recall practice</li>
              <li>Pomodoro technique (25-5 rule)</li>
              <li>Make short notes daily</li>
              <li>Teach what you learn</li>
            </ul>
          </div>

          {/* Time Management */}
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              ⏰ Time Management Tips
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Fix daily study routine</li>
              <li>Study in focused 1–2 hour blocks</li>
              <li>Take short breaks</li>
              <li>Avoid multitasking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
