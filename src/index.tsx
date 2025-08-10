import { Accessor, For, JSXElement } from "solid-js";

export default function Filter<T>(props: {
	candidates: T[];
	predicates: ((candidate: T) => boolean)[];

	fallback?: JSXElement;
	children?: (candidate: T, i: Accessor<number>) => JSXElement;
}): JSXElement {
	return (
		<For
			each={flt(props.candidates, props.predicates)}
			fallback={props.fallback}
			children={props.children ?? String}
		/>
	);
}

function flt<T>(candidates: T[], predicates: ((candidate: T) => boolean)[]): T[] {
	return candidates.filter((candidate) =>
		predicates.every((predicate) => predicate(candidate)),
	);
}
