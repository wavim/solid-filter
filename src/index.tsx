import { Accessor, For, JSXElement } from "solid-js";

export default function Filter<T>(props: {
	candidates: T[];
	predicates: PredCBK<T>[];

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

type PredCBK<T> = (candidate: T, i: number, arr: T[]) => boolean;

function flt<T>(candidates: T[], predicates: PredCBK<T>[]): T[] {
	return candidates.filter((candidate, i, arr) =>
		predicates.every((predicate) => predicate(candidate, i, arr)),
	);
}
