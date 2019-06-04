function identity<A>(A value): Writer<A> {
    return [value, ""];
}
