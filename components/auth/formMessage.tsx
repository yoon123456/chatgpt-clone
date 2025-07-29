import React from "react";

interface IFormMessage {
	message: string;
}

const FormMessage = ({ message }: IFormMessage) => {
	return <p className="text-sm text-red-600 ml-1 mt-1">{message}</p>;
};

export default FormMessage;
