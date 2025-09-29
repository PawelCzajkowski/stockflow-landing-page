export default function PrivacyPage() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                        INFORMACJA O PRZETWARZANIU DANYCH OSOBOWYCH
                    </h2>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Administrator danych osobowych
                    </h4>
                    <p className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto mb-8">
                        Administratorem Państwa danych osobowych jest Paweł Czajkowski, e-mail: support@stockflow.pl.
                    </p>

                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Podstawa prawna przetwarzania
                    </h4>
                    <div className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto mb-8">
                        <p>Państwa dane osobowe będą przetwarzane na podstawie:</p>
                        <ul className="list-disc list-inside mt-4 text-left max-w-2xl mx-auto">
                            <li><strong>Art. 6 ust. 1 lit. a RODO</strong> - zgoda na przetwarzanie danych w celach marketingowych i kontaktu handlowego</li>
                            <li><strong>Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes administratora w zakresie rozwoju produktu i badania rynku</li>
                        </ul>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Cele przetwarzania danych
                    </h4>
                    <div className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto mb-8">
                        <p>Zebrane dane osobowe będą przetwarzane w celu:</p>
                        <ol className="list-decimal list-inside mt-4 text-left max-w-2xl mx-auto">
                            <li><strong>Prowadzenia działań marketingowych</strong> - wysyłanie newsletterów, informacji o produktach, ofert promocyjnych i aktualizacji</li>
                            <li><strong>Kontaktu handlowego</strong> - prezentacja oferty produktu i nawiązanie współpracy biznesowej</li>
                            <li><strong>Rozwoju produktu</strong> - analiza potrzeb rynku, dostosowanie funkcjonalności produktu (dane anonimizowane)</li>
                            <li><strong>Segmentacji użytkowników</strong> - dostosowanie komunikacji i oferty do profilu odbiorcy</li>
                        </ol>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Zakres przetwarzanych danych
                    </h4>
                    <div className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto mb-8">
                        <p>Przetwarzamy następujące dane osobowe:</p>
                        <ul className="list-disc list-inside mt-4 text-left max-w-2xl mx-auto">
                            <li><strong>Dane obowiązkowe:</strong> imię, adres e-mail</li>
                            <li><strong>Dane opcjonalne:</strong> wielkość firmy, branża, obecny sposób rozwiązania problemu, liczba godzin poświęcona na rozwiązanie problemu, planowany budżet</li>
                        </ul>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Okres przechowywania danych
                    </h4>
                    <p className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto mb-8">
                        Dane osobowe będą przechowywane przez okres nie dłużej niż 36 miesięcy od zebrania lub do momentu wycofania zgody.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Odbiorcy danych
                    </h4>
                    <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        <p>Dane osobowe nie będą przekazywane podmiotom trzecim. Dostęp do danych będą miały jedynie podmioty świadczące usługi techniczne:</p>
                        <ul className="list-disc list-inside mt-4 text-left max-w-2xl mx-auto">
                            <li><strong>Google LLC</strong> - w zakresie przechowywania danych na serwerach Google oraz Google Analytics</li>
                            <li>Dane nie są przekazywane poza Europejski Obszar Gospodarczy</li>
                        </ul>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                        Prawa osoby, której dane dotyczą
                    </h4>
                    <div className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto">
                        <p>Przysługuje Państwu prawo do:</p>
                        <ul className="list-disc list-inside mt-4 text-left max-w-2xl mx-auto">
                            <li><strong>Dostępu do danych</strong> - prawo do uzyskania informacji o przetwarzanych danych osobowych</li>
                            <li><strong>Sprostowania danych</strong> - prawo do poprawienia nieprawidłowych lub niekompletnych danych</li>
                            <li><strong>Usunięcia danych</strong> - prawo do żądania usunięcia danych osobowych (prawo do bycia zapomnianym)</li>
                            <li><strong>Ograniczenia przetwarzania</strong> - prawo do żądania ograniczenia przetwarzania danych w określonych sytuacjach</li>
                            <li><strong>Przenoszenia danych</strong> - prawo do otrzymania swoich danych w ustrukturyzowanym formacie oraz prawo do ich przesłania innemu administratorowi</li>
                            <li><strong>Sprzeciwu wobec przetwarzania</strong> - prawo do wniesienia sprzeciwu wobec przetwarzania danych osobowych w określonych sytuacjach</li>
                            <li><strong>Wycofania zgody</strong> - prawo do wycofania zgody na przetwarzanie danych osobowych w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego na podstawie zgody przed jej wycofaniem</li>
                        </ul>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 mt-8">
                        Prawo wniesienia skargi do organu nadzorczego
                    </h4>
                    <p className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto">
                        W przypadku naruszenia przepisów dotyczących ochrony danych osobowych, mają Państwo prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mb-4 mt-8">
                        Dobrowolność podania danych
                    </h4>
                    <p className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto">
                        Podanie danych osobowych jest dobrowolne, jednak ich niepodanie może uniemożliwić kontakt i prezentację oferty produktu.
                    </p>
                </div>
            </div>
        </section>
    );
}