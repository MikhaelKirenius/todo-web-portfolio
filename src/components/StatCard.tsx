import React from 'react';
import { Clock, Activity, CheckCircle } from 'lucide-react';
import { StatCardProps } from '../types/listsTypes';


const StatCard: React.FC<StatCardProps> = ({ pendingTasks, ongoingTasks, completedTasks }) => {
  const totalTasks = pendingTasks + ongoingTasks + completedTasks;
  
  const getPercentage = (value: number): number => {
    return totalTasks === 0 ? 0 : Math.round((value / totalTasks) * 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Pending Tasks</p>
            <h3 className="text-3xl font-bold text-red-600 mt-2">{pendingTasks}</h3>
            <div className="mt-2 flex items-center">
              <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {getPercentage(pendingTasks)}% of total
              </div>
            </div>
          </div>
          <div className="bg-red-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Ongoing Tasks</p>
            <h3 className="text-3xl font-bold text-blue-600 mt-2">{ongoingTasks}</h3>
            <div className="mt-2 flex items-center">
              <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {getPercentage(ongoingTasks)}% of total
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Completed Tasks</p>
            <h3 className="text-3xl font-bold text-green-600 mt-2">{completedTasks}</h3>
            <div className="mt-2 flex items-center">
              <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {getPercentage(completedTasks)}% of total
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
        
        {totalTasks > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="text-green-600 font-medium">{getPercentage(completedTasks)}%</span>
            </div>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${getPercentage(completedTasks)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {totalTasks > 0 && (
        <div className="md:col-span-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mt-2">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="text-gray-500 text-sm">Total Tasks</p>
              <p className="text-xl font-bold text-gray-800">{totalTasks}</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-gray-500 text-sm">Completion Rate</p>
              <p className="text-xl font-bold text-green-600">{getPercentage(completedTasks)}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;