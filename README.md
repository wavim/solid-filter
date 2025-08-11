### Usage

Install this package in your project:

```bash
# via npm
npm add @wavim/solid-filter

# or pnpm
pnpm add @wavim/solid-filter

# or yarn
yarn add @wavim/solid-filter
```

Use the component in your application:

```tsx
import Filter from "@wavim/solid-filter";

interface FilterProps<T>
{
	candidates: Array<T>;
	predicates: Array<(candidate: T, i: number, arr: T[]) => boolean>;

	fallback?: JSXElement;
	children?: (candidate: T, i: Accessor<number>) => JSXElement;
}

<Filter
	candidates={[...]}
	predicates={[...]}
	fallback={...}
	children={...}
/>
```
