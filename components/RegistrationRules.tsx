import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const RegistrationRules = () => {
  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Правила реєстрації на платформі 17 Цілей Сталого Розвитку</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Мета платформи:</strong> Платформа створена для сприяння взаємодії та обміну інформацією щодо 17 цілей сталого розвитку.
          </li>
          <li>
            <strong>Умови реєстрації:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Реєстрація доступна особам, які досягли 18 років.</li>
              <li>Користувачі зобов&#39;язані надавати правдиву інформацію під час реєстрації.</li>
            </ul>
          </li>
          <li>
            <strong>Обліковий запис:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Кожен користувач може мати лише один обліковий запис.</li>
              <li>Обліковий запис заборонено передавати або продавати третім особам.</li>
            </ul>
          </li>
          <li>
            <strong>Використання платформи:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Ви зобов&#39;язані використовувати платформу виключно для законних цілей, пов&#39;язаних з цілями сталого розвитку.</li>
              <li>Заборонено поширювати інформацію, яка є образливою або неправдивою.</li>
            </ul>
          </li>
          <li>
            <strong>Захист персональних даних:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Всі персональні дані користувачів обробляються відповідно до Політики конфіденційності.</li>
              <li>Адміністрація зобов’язується не передавати персональні дані третім особам без вашої згоди.</li>
            </ul>
          </li>
          <li>
            <strong>Відповідальність користувачів:</strong>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>Ви несете відповідальність за контент, який розміщуєте на платформі.</li>
              <li>У разі порушення правил, адміністрація залишає за собою право обмежити доступ або видалити ваш обліковий запис.</li>
            </ul>
          </li>
          <li>
            <strong>Зміни в правилах:</strong> Адміністрація залишає за собою право змінювати ці правила в будь-який час.
          </li>
          <li>
            <strong>Контактна інформація:</strong> У разі виникнення питань або проблем, звертайтеся до служби підтримки через форму зворотного зв’язку.
          </li>
        </ol>
      </CardContent>
    </Card>
  );
};

export default RegistrationRules;
