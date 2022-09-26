
 class Configs {
  public user = process.env.MAIL_USER;
  public password = process.env.MAIL_PASS;
  public service = 'gmail';
}
export default new Configs()