// @flow
import type { TRANSLATION_OBJ } from '../types'

export const SWEDISH_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'laddar...',
    address: 'Adress',
    privateKey: 'Privat nyckel',
    cancel: 'Avbryt',
    fees: 'Avgifter',
    version: 'Version',
    in: 'In',
    out: 'Ut'
  },
  MainPage: {
    title: 'BZC Wallet',
    value: 'Värde',
    send: 'Skicka',
    received: 'Mottaget',
    sent: 'Skickat',
    noTxFound: 'Ingen transaktionshistorik hittades.',
    noConnection: 'Anslutningen vägrade.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Kopiera adressen till urklipp'
  },
  SendPage: {
    title: 'Skicka BZC',
    payTo: 'Betala till',
    amountToPay: 'Summa att betala',
    balance: 'Saldo',
    networkFee: 'Nätverksavgift',
    slowTx: 'Långsam Tx',
    fastTx: 'Snabb Tx',
    from: 'Från',
    toAddress: 'Till adress',
    amount: 'Summa',
    max: 'Max',
    send: 'Skicka',
    txSuccessful: 'Transaktionen lyckades! Tryck här för att se din transaktion.',
    confirmSend: 'Jag vill skicka dessa BZC',
    invalidAddress: 'Ogiltig `Till adress` Endast transparenta adresser stöds för tillfället.',
    invalidAmount: 'Ogiltig `Summa`.',
    invalidFee: 'Ogiltig `Avgifter`. Testa 0 :)',
    bitzecAmount: 'Summa måste vara mer än 0.',
    notEnoughZEN: 'Det finns inte tillräckligt med BZC i kontot för att genomföra transaktionen.',
    noCameraPermissions: 'Inget kameratillstånd. Du kan tillåta kameran i dina inställningar.'
  },
  TxDetailPage: {
    txid: 'Transaktions-ID',
    blockhash: 'Block Hash',
    blockheight: 'Blockhöjd',
    confirmations: 'Bekräftelser'
  },
  SettingsPage: {
    title: 'Inställningar',
    language: 'Språk',
    currency: 'Valuta',
    secretPhrase: 'Visa hemlig fras',
    showPrivateKeys: 'Visa privata nycklar',
    recoverExistingWallet: 'Återskapa befintlig plånbok',
    current: 'Nuvarande'
  },
  SecretPhrasePage: {
    title: 'Hemlig fras'
  },
  ShowPrivateKeyPage: {
    title: 'Privata nycklar'
  },
  RecoverExistingWalletPage: {
    title: 'Återskapa befinlig plånbok',
    secretPhrase: 'Hemlig fras',
    textareaPlaceholder: 'Hemlig fras, minst 16 tecken',
    confirmUnderstand: 'Jag förstår att genom att återskapa plånboken så förstörs min nuvarande plånbok.',
    recover: 'Återskapa'
  },
  AboutPage: {
    title: 'Om'
  },
  PinPage: {
    changePinTitle: 'Ändra PIN',
    newPinPageTitle: 'BZC Wallet Inställningar',
    verifyPinPageTitle: 'BZC Wallet PIN Bekräftelse',
    setupNewPin: 'Skapa en ny 4-siffrig PIN',
    reenterPin: 'Skriv in din PIN igen',
    pinsNotSimilar: 'Dina inskrivna PIN matchar inte',
    invalidPin: 'Ogiltig PIN',
    enterYourPin: 'Ange din 4-siffrig PIN'
  },
  ContactsPage: {
    contacts: 'Kontakter',
    contactsName: 'Namn',
    contactsAddress: 'Adress',
    noContactsFound: 'Inga kontakter hittade.'
  }
}
