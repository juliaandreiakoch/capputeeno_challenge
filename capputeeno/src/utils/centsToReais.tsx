export function centsToReais(cents: number): string {
    const reais: number = cents / 100;
    return `R$ ${reais.toFixed(2)}`;
}