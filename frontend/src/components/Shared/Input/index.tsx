import classNames from 'classnames';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface IProps {
	label: string;
	name: string;
	type?: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	className?: string;
}

const Input = ({
	label,
	name,
	type = 'text',
	value,
	onChange,
	placeholder = '',
	disabled,
	required,
	className,
}: IProps) => {
	const inputClassName = classNames('my-input', className);

	return (
		<InputWrapper>
			<input
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				required={required}
				className={inputClassName}
			/>
			<label htmlFor={name}>{label}</label>
		</InputWrapper>
	);
};

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 13px;
	width: 100%;

	input {
		width: 100%;
		font-size: 16px;
		margin: 8px 0;
		padding: 14px 16px;
		border: 1px solid var(--color-gray);
		border-radius: 4px;
		background: var(--bg-color-primary);
		color: var(--color-gray-light);
		transition: border-color 0.3s ease-in-out;

		&::placeholder {
			color: var(--bg-color-primary);
		}

		&:focus {
			outline: none;
			border-color: var(--color-primary);
		}
	}

	label {
		padding: 0 8px;
		position: absolute;
		left: 16px;
		background-color: var(--bg-color-primary);
		text-align: center;
		font-family: 'Open Sans';
		font-size: 16px;
		font-weight: 600;
		line-height: 18px;
		color: var(--text-color-black-gray-light);
	}

	input[required]:invalid + label::after {
		content: ' *';
		color: red;
	}
`;

export default Input;
