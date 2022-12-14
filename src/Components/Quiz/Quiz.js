import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ data }) => {
  const { id, name, logo, total } = data;
  return (
    <div className="quiz">
      <div className="max-w-sm">
        <Card imgSrc={logo}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex flex-col justify-between items-center">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Qustions: {total}
            </p>

            <Button>
              <Link className="font-light" to={`/home/quiz/${id}`}>
                Start Quiz
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
