import React from 'react';


interface StatCardProps {
  pendingTasks: number;
  ongoingTasks: number;
  completedTasks: number;
}

const StatCard: React.FC<StatCardProps> = ({ pendingTasks, ongoingTasks, completedTasks }) => {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Pending Task</div>
        <div className="stat-value text-red-600">{pendingTasks}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">On Going Task</div>
        <div className="stat-value">{ongoingTasks}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Completed Task</div>
        <div className="stat-value text-secondary">{completedTasks}</div>
      </div>
    </div>
  );
};

export default StatCard;